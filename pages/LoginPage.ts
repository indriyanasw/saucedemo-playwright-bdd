import { Page } from '@playwright/test';
import { typeText, clickElement } from '../utils/reuseAbleActions';

export class LoginPage {

constructor(private page: Page){}

username = '#user-name'
password = '#password'
loginBtn = '#login-button'
errorMsg = '[data-test="error"]'

async openSite(){
await this.page.goto('https://www.saucedemo.com/')
}

async login(username:string,password:string){

await typeText(this.page,this.username,username)
await typeText(this.page,this.password,password)

await clickElement(this.page,this.loginBtn)

}

}