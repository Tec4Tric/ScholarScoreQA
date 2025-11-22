# Welcome to ScholarScoreQA Docs

# ScholarScoreQA 
## Reliable Scholarly Question Answering


A **retrieval-augmented scholarly question-answering system** designed for long research articles. ScholarScoreQA integrates:

* **K-Span Select** — a span-level retrieval mechanism that filters only the most relevant evidence.
* **Multi-dimensional evaluation** using a **Language Judge**, **Tone Judge**, and a unified metric called **ScholarScore**.
* **Multiple prompting strategies** (Zero-shot, CoT, Few-shot, Meta-prompting) to generate diverse answer candidates.

This repository accompanies the paper:

> **K-Span Select and Multi-Dimensional Judging for Reliable Scholarly Question Answering**
> *Preetam Pati, Sayan De, Saurabh Tiwari, Dr. Imon Mukherjee, Dr. Debarshi Kumar Sanyal*
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

## 👨‍💻 Development Team

| Name                   | Affiliation(s)                                                                 | Email                              | GitHub                        |
|------------------------|--------------------------------------------------------------------------------|------------------------------------|-------------------------------|
| **Preetam Pati**       | Indian Institute of Information Technology Kalyani, India                      | preetam6teen@gmail.com             | [cosmiiccat](https://github.com/cosmiiccat) |
| **Sayan De**           | Indian Institute of Information Technology Kalyani, India<br>Dr. B. C. Roy Engineering College, Durgapur, India | sayan_jrf22@iiitkalyani.ac.in      | [tec4tric](https://github.com/tec4tric) |
| **Saurabh Tiwari**     | Indian Institute of Information Technology Kalyani, India                      | smplrsaurabh30@gmail.com           | [admin1-saurabh](https://github.com/admin1-saurabh) |
| **Imon Mukherjee**     | Indian Institute of Information Technology Kalyani, India                      | imon@iiitkalyani.ac.in             | [imoniiitkalyani](https://github.com/imoniiitkalyani) |
| **Debarshi Kumar Sanyal** | Indian Association for the Cultivation of Science (IACS), Jadavpur, India   | debarshi.sanyal@iacs.res.in        | [dksanyal](https://github.com/dksanyal) |



## 🙏 Acknowledgements

This work is partially supported by the ANRF grant CRG/2021/000803 for the project “Extraction, Organization and Query of Scholarly Information”. We thank our institutions and collaborators for their invaluable support.

---

## 💡 Feedback & Support

If you encounter any issues, have suggestions, or want to contribute, please [open an issue](https://github.com/cosmiiccat/ScholarScoreQA/issues) or reach out to the development team directly. We welcome feedback and collaboration!

---
