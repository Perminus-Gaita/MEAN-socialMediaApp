import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router,
    private _route: ActivatedRoute, private _httpService: HttpService, 
    private _validateService: ValidateService,
    private _authService: AuthService,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

}
