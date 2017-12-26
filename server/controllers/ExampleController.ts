import {Controller, Req, Res, Get, Post} from "routing-controllers";


@Controller('/example')
export class SettingsController {

  @Get("/")
  getAll(@Req() request: any, @Res() response: any) {
    return response.json({ message: 'Get all works!' });
  }

  @Post('/')
  post(@Req() request: any, @Res() response: any) {
    return response.json({ message: 'This works as well!' });
  }
}
