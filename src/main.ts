import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  await app.listen(port,()=>{
    console.log("application running on PORT >> ",port)
  });
}
bootstrap();
