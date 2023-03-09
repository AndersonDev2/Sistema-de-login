from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import *
from .models import *
from . import hash
from . import jwt
# Create your views here.


class ContasView(viewsets.ModelViewSet):
    serializer_class = ContaSerializer
    queryset = ContaModel.objects.all()

    @action(detail=False, methods=["POST"])
    def criar_conta(self, request):
        data = request.data
        contas_com_mesmo_nome = ContaModel.objects.filter(
            usuario=data["usuario"])
        if len(contas_com_mesmo_nome) != 0:
            return Response("Nome de usuário já existe")
        salt = hash.gerar_string()
        senha = hash.pbkdf2(data["senha"], salt)
        nova_conta = ContaModel.objects.create(
            usuario=data["usuario"],
            email=data["email"],
            senha=senha,
            salt=salt,
        )
        nova_conta.save()
        payload = self.gerar_payload(nova_conta)
        jwt_texto = jwt.encode(payload)
        response = Response("Conta Criada")
        response.set_cookie("JWT", jwt_texto, max_age=99999999, httponly=True)
        return response

    @action(detail=False, methods=["POST"])
    def atualizar_senha(self, request):
        data = request.data
        contas_com_mesmo_nome = ContaModel.objects.filter(
            usuario=data["usuario"])
        if len(contas_com_mesmo_nome) == 0:
            return Response("Nome de usuário não encontrado")
        conta = contas_com_mesmo_nome[0]
        salt = hash.gerar_string()
        senha = hash.pbkdf2(data["senha"], salt)
        conta.salt = salt
        conta.senha = senha
        conta.save()
        return Response("Senha atualizada")

    @action(detail=False, methods=["POST"])
    def entrar(self, request):
        data = request.data
        contas_com_mesmo_nome = ContaModel.objects.filter(
            usuario=data["usuario"])
        if len(contas_com_mesmo_nome) == 0:
            return Response("Nome de usuário não encontrado")
        conta = contas_com_mesmo_nome[0]
        senha = hash.pbkdf2(data["senha"], conta.salt)
        if senha == conta.senha:
            payload = self.gerar_payload(conta)
            jwt_texto = jwt.encode(payload)
            response = Response("Acesso válido")
            response.set_cookie(
                "JWT", jwt_texto, max_age=99999999, httponly=True)
            return response
        else:
            return Response("Senha Inválida")

    @action(detail=False, methods=["GET"])
    def validar_jwt(self, request):
        cookies = request.COOKIES
        try:
            jwt_cookie = cookies["JWT"]
            decoded_jwt = jwt.decode(jwt_cookie)
            return Response(decoded_jwt["usuario"])
        except:
            response = Response("JWT inválido")
            response.delete_cookie("JWT")
            return response

    @action(detail=False, methods=["GET"])
    def sair(self, request):
        response = Response("")
        response.delete_cookie("JWT")
        return response

    def gerar_payload(self, obj):
        return {
            "usuario": obj.usuario,
            "email": obj.email,
        }
