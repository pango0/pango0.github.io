---
title: "Instruction-Tuned LLMs for Multilingual Medical ASR and Privacy Entity Extraction"
collection: publications
category: manuscripts
permalink: /publication/aicup.md
excerpt: ''
date: 2025-08-10
venue: 'The 20th World Congress on Medical and Health Informatics (MEDINFO) Workshop'
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
# paperurl: 'https://academicpages.github.io/files/paper1.pdf'
# bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
## Abstract:
In this study, we propose a comprehensive framework for sensitive information recognition in bilingual doctor-patient speech, developed
for the AI CUP 2025 Spring Challenge. The task consists of two subtasks:
automatic speech recognition (ASR) and named entity recognition
(NER) for privacy-related spans. For ASR, we fine-tuned the Whisperlarge-
v3-turbo model separately on Chinese and English audio, achieving
improved Match Error Rates (MER) through language-specific modeling.
For NER, we reformatted the data into Alpaca-style instruction-output
pairs and employed QLoRA fine-tuning on two complementary LLMs,
Gemma-27B and Qwen2.5-32B-Instruct. We further applied data augmentation
using semantic rewriting with a distilled Qwen-7B model and
performed category-wise training to enhance low-frequency entity detection.
To align predicted spans with timestamps, we devised a sliding
window approach combined with Gemini-based LLM inference for span
recovery. Finally, we integrated predictions from Gemma and Qwen using
a non-overlapping span merging strategy. Our system achieved 2nd place
in the ASR subtask and ranked 6th overall, demonstrating the effectiveness
of combining LLMs, instruction tuning, and hybrid post-processing
for medical speech privacy protection.