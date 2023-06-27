import { Controller, Get } from '@nestjs/common';

@Controller('girl')
export class GirlController {
  @Get()
  getGirl(): any {
    return {
      code: 200,
      data: {
        name: '小红',
      },
      message: 'success',
    };
  }
}
