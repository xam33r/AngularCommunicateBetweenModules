# LazyLoad Angular Ivy Modules

This small project demonstrates how how to manually/programmatically lazy load Angular modules with ivy

Run command ng --version to check Angular version


#Please make sure you have Angular 8.1.x or higher 

enable Ivy by adding following option in angularCompilerOptions inside tsconfig.json 
"angularCompilerOptions": {
    "enableIvy": true,
  }
if you have Angular 9.x.x you shouldn't enable ivy in compilerOptions


