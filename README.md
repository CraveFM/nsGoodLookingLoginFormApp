# nsGoodLookingLoginFormApp

[<img src="https://github.com/angular/angular/blob/master/aio/src/assets/images/logos/angular/angular.png" width="31" height="31"></img>](https://play.nativescript.org/?template=play-ng&id=Hqp5UQ&v=6155) Building a Good-Looking Login Form App

[<img src="https://raw.githubusercontent.com/NativeScript/code-samples/master/screens/login-form-ios-2.gif" width="210" height="375"></img>](https://play.nativescript.org/?template=play-ng&id=Hqp5UQ&v=6155)

Example taken from [:bookmark:`nativescript.rocks`](https://plugins.nativescript.rocks/samples) and can be used as a template since it has already been converted to [NativeScript 7](https://nativescript.org/blog/nativescript-7-announcement)

## :o: Create a project by using this template

```
$ ns create nsGoodLookingLoginFormApp --template https://github.com/CraveFM/nsGoodLookingLoginFormApp.git
```

## :bookmark: Create a project from Scratch

```
$ ns create nsGoodLookingLoginFormApp --template @nativescript/template-blank-ng
```

:gear: Reverse Engineering from [PlayGround](https://play.nativescript.org/?template=play-ng&id=Hqp5UQ&v=6155)'s Example

- [ ] Create a `NSPlayground` directory 

- [ ] Download the old {N} 6.0 project from [Playground]((https://play.nativescript.org/?template=play-ng&id=Hqp5UQ&v=6155))

- [ ] Move the `NSPlayground.zip` file to the `NSPlayground` directory in the project

```
$ mv ~/Downloads/NSPlayground.zip NSPlayground
```

- [ ] Extract the {N} 6.0 project files in the `NSPlayground` directory

```
$ unzip NSPlayground/NSPlayground.zip -d NSPlayground
```

- [ ] Assets

* copy `images` folder to the `src/assets` directory

```
$ cp -r NSPlayground/app/images src/assets
```

## :a: Login Service Classes

:gear: Angular CLI schematics generation tools

```
$ npm install @schematics/angular @nativescript/schematics tslint --save-dev 
```

```
$ npm install kinvey-nativescript-sdk --save
```

:pushpin: User Service

- [ ] Generate the `User` Class Model

```
$ % ng generate class shared/UserModel --skip-tests=true
```

- [ ] Edit `user.ts` and add the following instance variables (fields) to the `User` class

```typescript
    email: string;
    password: string;
    confirmPassword: string;
```

- [ ] Generate the `User` service

```
$ ng generate service shared/User --skip-tests=true
```

- [ ] Edit `user-service.ts` 

* change the constructor with along with the appropriate import

```typescript
  constructor(private kinveyUserService: KinveyUserService) { }
``

```typesccript
import { UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";
```


- [ ] Edit `app.module.ts` 

* add the below code to the `imports` property 

```typescript
        KinveyModule.init({
            appKey: "kid_SyY8LYO8M",
            appSecret: "09282985d7c540f7b076a9c7fd884c77"
        })
```

like this

```typescript
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        KinveyModule.init({
            appKey: "kid_SyY8LYO8M",
            appSecret: "09282985d7c540f7b076a9c7fd884c77"
        })
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
```

* add the `KinveyModule` import

```typescript
import { KinveyModule } from "kinvey-nativescript-sdk/lib/angular";
```

* add the below `providers` property just underneath the `declarations` property

```typescript
    providers: [
        UserService
    ],
```

* add the `UserService` import

```typescript
import { UserService } from "./shared/user.service";
```

- [ ] Final edit

```typecript
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { KinveyModule } from "kinvey-nativescript-sdk/lib/angular";
import { UserService } from "./shared/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        KinveyModule.init({
            appKey: "kid_SyY8LYO8M",
            appSecret: "09282985d7c540f7b076a9c7fd884c77"
        })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
```
