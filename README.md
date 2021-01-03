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

* copy `assets` folder to the `src` directory

```
$ cp -r NSPlayground/app/assets src
```

## :a: Login Form Component

:gear: Angular CLI schematics generation tools

```
$ npm install @schematics/angular @nativescript/schematics tslint --save-dev 
```

:pushpin: Login Module

- [ ] Generate the module

```
$ ng generate module login  --routing
```

- [ ] Edit `app-routing.module.ts` and replace the entire `routes` JSON array bypassing the `Home` Module

```typescript
const routes: Routes = [
    { path: "", redirectTo: "/appleCard", pathMatch: "full" },
    { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule) }, // lazy loaded module
];
```

- [ ] Generate the component

```
$ ng generate component login/login  --skip-import --skipTests=true
```

* do some clean up

```
$ find src -name "*.tns.*" -exec rm {} \;  
```

```
$ find src -name "*.spec.ts" -exec rm {} \;   
```

- [ ] Attach the component to the Module by editing the `login.module.ts`

* add the `LoginComponent` to the **declarations** `Array` property 

* along with adding the **schemas** `Array` property give it the `NO_ERRORS_SCHEMA` value

```typescript
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoginModule { }
```

- [ ] Edit the `login-routing.module.ts` and add a default component value to the routing

```typescript
const routes: Routes = [
  { path: "", component: LoginComponent}
];
```
