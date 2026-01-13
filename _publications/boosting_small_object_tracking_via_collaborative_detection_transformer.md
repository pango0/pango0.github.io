---
title: "Boosting Small Object Tracking via Collaborative Detection Transformer"
collection: publications
category: manuscripts
permalink: /publication/boosting_small_object_tracking_via_collaborative_detection_transformer
excerpt: ''
date: 2025-09-26
venue: 'International Conference on Machine Vision and Applications (MVA) Oral'
---
## Abstract:
Small object tracking remains a challenging task in computer vision due to factors such as low resolution, background clutter, occlusion, and limited appearance information. These challenges often lead to missed detections and identity switches, particularly when using conventional tracking-by-detection pipelines. In this paper, we propose an effective small object tracking framework that integrates enhanced detection and robust tracking strategies to address these limitations. Our approach fine-tunes the Collaborative Hybrid Assignments DETR (Co-DETR) with augmented data to improve its sensitivity to small-scale objects. To further refine detection quality, we apply Slicing Aided Hyper Inference (SAHI), which enables more precise localization through image slicing. The resulting high-quality detections are then passed to BoostTrack++, a state-of-the-art multi-object tracker. We name this pipeline Collaborative Hybrid Assignments and Tracking with slicing-aided hyper inference (CHAT). Experimental results on the SMOT4SB dataset demonstrate that our pipeline improves tracking performance on small objects, achieving more accurate detection and consistent identity preservation in complex visual scenes.