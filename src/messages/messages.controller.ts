import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateMessegeDto } from './data_transfer_objects/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body: CreateMessegeDto) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
