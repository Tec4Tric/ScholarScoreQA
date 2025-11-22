
<p align="center">
  <img src="assets/hero2.png" style="width: 100%; max-width: 1000px;" />
</p>

# ScholarScoreQA 
## Reliable Scholarly Question Answering

<p align="center">
  <img src="https://img.shields.io/badge/LLM-QA-blue" />
  <img src="https://img.shields.io/badge/Retrieval-K--Span-green" />
  <img src="https://img.shields.io/badge/License-MIT-orange" />
  <img src="https://img.shields.io/badge/Status-Research%20Prototype-purple" />

  <img src="https://img.shields.io/github/last-commit/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/contributors/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/forks/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/stars/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/issues/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/issues-pr/cosmiiccat/ScholarScoreQA" />

  <img src="https://img.shields.io/github/languages/top/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/languages/count/cosmiiccat/ScholarScoreQA" />
  <img src="https://img.shields.io/github/repo-size/cosmiiccat/ScholarScoreQA" />
</p>


A **retrieval-augmented scholarly question-answering system** designed for long research articles. ScholarScoreQA integrates:

* **K-Span Select** — a span-level retrieval mechanism that filters only the most relevant evidence.
* **Multi-dimensional evaluation** using a **Language Judge**, **Tone Judge**, and a unified metric called **ScholarScore**.
* **Multiple prompting strategies** (Zero-shot, CoT, Few-shot, Meta-prompting) to generate diverse answer candidates.

This repository accompanies the paper:

> **K-Span Select and Multi-Dimensional Judging for Reliable Scholarly Question Answering**
> *Preetam Pati, Sayan De, Saurabh Tiwari, Imon Mukherjee, Debarshi Kumar Sanyal*
> *IIIT Kalyani & IACS Kolkata*

---

## 🚀 Overview

Long scholarly documents present challenges for QA:

* Evidence is often **scattered** across sections.
* Retrieval systems can fetch **irrelevant text**, confusing LLMs.
* LLM-generated answers may be **fluent but hallucinated**.

**ScholarScoreQA** addresses this through:

1. **Span-level Context Engineering** via K-Span Select.
2. **Diverse LLM prompting** to generate candidate answers.
3. **Two independent judge modules** to ensure factual and stylistic reliability.
4. **ScholarScore**, a harmonic metric to pick the best final answer.

---

📘 **Repo Structure (Auto-updated):** [View REPO_TREE.txt](./REPO_TREE.txt)


## 📖 Citation

If you use ScholarScoreQA or reference our work, please cite:

```bibtex
Preetam Pati, Sayan De, Saurabh Tiwari, Imon Mukherjee, and Debarshi Kumar Sanyal.
"K-Span Select and Multi-Dimensional Judging for Reliable Scholarly Question Answering."
In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL), 2025.
```

---

## 📄 API Reference (Auto-Generated)

API documentation is generated automatically using **pdoc** and pushed to the `docs/` folder.

Browse the latest API docs:  
👉 **[docs/](./docs/)**  

```md
## 📘 Documentation (Auto-Built)

This project uses **MkDocs + Material Theme** for documentation.  
Docs are automatically built and deployed to GitHub Pages on every push to `main`.

🔗 **Live Docs:** *https://cosmiiccat.github.io/ScholarScoreQA/*  
📦 **Build System:** GitHub Actions (`Build Docs` workflow)

## 👨‍💻 Development Team

| Name                   | Affiliation(s)                                                                 | Email                              | GitHub                        |
|------------------------|--------------------------------------------------------------------------------|------------------------------------|-------------------------------|
| **Preetam Pati**       | Indian Institute of Information Technology Kalyani, India                      | preetam6teen@gmail.com             | [cosmiiccat](https://github.com/cosmiiccat) |
| **Sayan De**           | Indian Institute of Information Technology Kalyani, India<br>Dr. B. C. Roy Engineering College, Durgapur, India | sayan_jrf22@iiitkalyani.ac.in      | [tec4tric](https://github.com/tec4tric) |
| **Saurabh Tiwari**     | Indian Institute of Information Technology Kalyani, India                      | smplrsaurabh30@gmail.com           | [admin1-saurabh](https://github.com/admin1-saurabh) |
| **Imon Mukherjee**     | Indian Institute of Information Technology Kalyani, India                      | imon@iiitkalyani.ac.in             | [imon](https://github.com/imon) |
| **Debarshi Kumar Sanyal** | Indian Association for the Cultivation of Science (IACS), Jadavpur, India   | debarshi.sanyal@iacs.res.in        | [dksanyal](https://github.com/dksanyal) |



## 🙏 Acknowledgements

This work is partially supported by the ANRF grant CRG/2021/000803 for the project “Extraction, Organization and Query of Scholarly Information”. We thank our institutions and collaborators for their invaluable support.

---

## 💡 Feedback & Support

If you encounter any issues, have suggestions, or want to contribute, please [open an issue](https://github.com/cosmiiccat/ScholarScoreQA/issues) or reach out to the development team directly. We welcome feedback and collaboration!

---

