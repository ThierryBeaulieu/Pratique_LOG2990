import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from '@app/services/example/example.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Message } from '@app/model/schema/message.schema';

@Controller('example')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    @Get('/')
    @ApiTags('Example')
    @ApiOkResponse({
        description: 'Return current time with hello world',
        type: Message,
    })
    exampleInfo() {
        return this.exampleService.helloWorld();
    }

    @ApiTags('Example')
    @ApiOkResponse({
        description: 'Return information about http api',
        type: Message,
    })
    @Get('/about')
    about() {
        return this.exampleService.about();
    }

    @ApiTags('Example')
    @ApiCreatedResponse({
        description: 'Send a message',
    })
    @Post('/send')
    send(@Body() requestBody: Message) {
        // HTTP_STATUS_CREATED will be automatically sent par NestJS
        this.exampleService.storeMessage(requestBody);
    }

    @ApiTags('Example')
    @ApiOkResponse({
        description: 'Return all messages',
        type: Message,
        isArray: true,
    })
    @Get('/all')
    all() {
        return this.exampleService.getAllMessages();
    }
}
