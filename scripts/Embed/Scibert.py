# scibert_embeddings.py
import torch
from transformers import AutoTokenizer, AutoModel
from typing import List


class SciBERTEmbeddingModel:
    def __init__(self, model_name: str = "allenai/scibert_scivocab_uncased"):
        """
        SciBERT available models:
        - allenai/scibert_scivocab_uncased
        - allenai/scibert_scivocab_cased
        """
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name).to(self.device)

    def get_embeddings(self, texts: List[str]) -> torch.Tensor:
        """Return CLS-based embeddings"""
        encoded = self.tokenizer(
            texts,
            padding=True,
            truncation=True,
            return_tensors="pt"
        ).to(self.device)

        with torch.no_grad():
            outputs = self.model(**encoded)
            embeddings = outputs.last_hidden_state[:, 0, :]  # CLS embedding

        return embeddings.cpu()


