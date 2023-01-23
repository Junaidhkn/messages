import { Controller, NotFoundException } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateMessageDto } from './data_transfer_objects/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // Bad Way ----- Refactor It using Dependency Injection
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message Not Found!');
    }

    return message;
  }
}
