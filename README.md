# Chatbot for E-commerce website

## Description

Introducing a revolutionary e-commerce chatbot, meticulously crafted to transform your shopping experience. With personalized assistance, the chatbot seamlessly guides you through making purchasing decisions, understanding policies, and resolving customer support inquiries. Say goodbye to complexities and hello to a smoother, more enjoyable shopping journey.

## Key Features:

**1.24/7 Customer Support:** With round-the-clock availability, our chatbot is always ready to assist you with any questions, concerns, or issues you may have, providing quick and helpful responses in real-time.

**2.Order Tracking:** The chatbot streamlines the order tracking process by providing step-by-step guidance, ensuring a seamless experience and swift issue resolution.

**3.Easy Returns and Exchanges:** Need to return or exchange an item? The chatbot simplifies the process by guiding you through the necessary steps, ensuring a hassle-free experience and prompt resolution.

**4.Seamless Checkout:** Complete your purchases seamlessly with our chatbot's intuitive checkout process. From adding items to your cart to selecting payment options, our chatbot makes the transaction smooth and convenient.

**5.Shipping Information:** Wondering about shipping times or international delivery options? Our chatbot provides comprehensive shipping information, including estimated delivery dates and available shipping methods, so you can plan accordingly.

**6.Account Management:** Manage your account effortlessly with our chatbot's account creation and management features. Whether you need to sign up, update your information, or change your preferences, our chatbot is here to help.

**Large Dataset:** The chatbot's knowledge is powered by a robust dataset containing JSON file consisting of intents with over 2200 lines, ensuring a rich and diverse range of responses and interactions to cater to your needs effectively.

## Initial Setup:

Clone repo and create a virtual environment
```
python3 -m venv venv
venv/Scripts/activate.bat
```
Install dependencies
```
pip install Flask torch torchvision nltk
```
Install nltk package
```
python
>>> import nltk
>>> nltk.download('punkt')
```
Modify `intents.json` with different intents and responses for your Chatbot

Run
```
python train.py
```
This command will generate the data.pth file. 
Afterward, Run the following command to test it in the Terminal.
```
python chat.py
```

