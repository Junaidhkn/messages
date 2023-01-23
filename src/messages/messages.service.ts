import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;
  constructor() {
    //  Service is creating its own Dependencies
    // Cannot Be used this on real APPS
    this.messagesRepository = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
