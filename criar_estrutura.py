import os

estrutura = {
    "modulos/01-algoritmia": [
        "algoritmos.md",
        "estructuras-datos.md",
        "matematicas-discretas.md",
        "logica-computacional.md"
    ],
    "modulos/02-desarrollo-base": [],
    "modulos/03-desarrollo-aplicacion": [],
    "modulos/04-computo-inteligente": [],
    "simulacros": [],
    "glossario": [],
    "scripts": [],
    "tracking": []
}

for pasta, arquivos in estrutura.items():
    os.makedirs(pasta, exist_ok=True)
    for arquivo in arquivos:
        caminho_arquivo = os.path.join(pasta, arquivo)
        if not os.path.exists(caminho_arquivo):
            with open(caminho_arquivo, 'w', encoding='utf-8') as f:
                f.write(f"# {arquivo.replace('.md', '').replace('-', ' ').title()}\n")
print("✅ Estrutura de pastas e arquivos criada com sucesso.")
