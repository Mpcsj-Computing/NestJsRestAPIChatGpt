#!/bin/bash

cd ..

zip -r nestjs_chatgpt.zip . -x "node_modules/*" -x "dist/*" -x ".env"