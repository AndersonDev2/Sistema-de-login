import random
import string
import hashlib
import binascii

def gerar_string(tamanho=32):
    texto = ""
    while len(texto) != tamanho:
        texto += random.choice(
            random.choice(
            [
                string.ascii_letters,
                string.digits,
                string.punctuation
            ]
            )
        )
    return texto

def pbkdf2(senha, salt):
    texto = hashlib.pbkdf2_hmac(
        hash_name="sha256",
        password=senha.encode(),
        salt=salt.encode(),
        iterations=1000,
        dklen=32,
    )
    texto = binascii.b2a_uu(texto).decode()
    return texto
