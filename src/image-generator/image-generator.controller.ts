import { Body, Controller, Get, Post } from '@nestjs/common';
import { ImageGeneratorService } from './image-generator.service';

@Controller('image-generator')
export class ImageGeneratorController {
    constructor(private readonly service:ImageGeneratorService){}

    @Post()
    async generateImage(@Body() data:any){
        const result = await this.service.generateImage(data.prompt)
        return {
            result
        }
    }
}
