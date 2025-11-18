# jina_embeddings.py
import torch
from transformers import AutoModel, AutoTokenizer
from typing import List


class JinaEmbeddingModel:
    def __init__(self, model_name: str = "jinaai/jina-embeddings-v4"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
        self.model = AutoModel.from_pretrained(
            model_name,
            trust_remote_code=True,
            dtype="auto"
        )
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model.to(self.device)

    def get_embeddings(self, texts: List[str]) -> torch.Tensor:
        """Return batched embeddings for list of texts"""
        encoded = self.tokenizer(
            texts,
            padding=True,
            truncation=True,
            return_tensors="pt"
        ).to(self.device)

        with torch.no_grad():
            outputs = self.model(**encoded)
            embeddings = outputs.last_hidden_state[:, 0, :]   # CLS token

        return embeddings.cpu()


