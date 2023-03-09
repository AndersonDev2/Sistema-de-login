import sys
sys.path.append("..")
from backend.settings import SECRET_KEY
import jwt


def encode(payload):
    return  jwt.encode(
        payload=payload,
        key=SECRET_KEY,
        algorithm="HS256"
    )

def decode(texto_encoded):
    return jwt.decode(
        jwt=texto_encoded,
        key=SECRET_KEY,
        algorithms=["HS256"]
    )