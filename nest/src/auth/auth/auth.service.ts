import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {firstValueFrom} from 'rxjs'
//Reactive x
@Injectable()
export class AuthService {
  constructor(private http: HttpService) { }

  async login(username: string, password: string) {
    
   const { data } = await firstValueFrom(this.http.post('http://host.docker.internal:8080/auth/realms/fullcycle/protocol/openid-connect/token', new URLSearchParams({
      client_id: 'nest',
      client_secret: 'd2b80e56-e742-4ac2-abdd-61e95e86d837',
      grant_type: 'password',
      username,
      password
    })))

    return data;
  }

}

// client_id=nest
// &client_secret=d2b80e56-e742-4ac2-abdd-61e95e86d837
// &grant_type=password
// &username=user1@user.com
// &password=123456
