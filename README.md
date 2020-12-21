# LazyLoad Angular Ivy Modules

This small project demonstrates how how to manually/programmatically lazy load Angular modules with ivy

Ru command ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 8.1.3
Node: 10.16.0
OS: win32 x64
Angular: 8.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.801.3
@angular-devkit/build-angular     0.801.3
@angular-devkit/build-optimizer   0.801.3
@angular-devkit/build-webpack     0.801.3
@angular-devkit/core              8.1.3
@angular-devkit/schematics        8.1.3
@ngtools/webpack                  8.1.3
@schematics/angular               8.1.3
@schematics/update                0.801.3
rxjs                              6.4.0
typescript                        3.4.5
webpack                           4.35.2


#Please make sure you have Angular 8.1.x or higher 

enable Ivy by adding following option in angularCompilerOptions inside tsconfig.json 
"angularCompilerOptions": {
    "enableIvy": true,
  }
if you have Angular 9.x.x you shouldn't enable ivy in compilerOptions


