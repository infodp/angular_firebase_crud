import { Component, OnInit } from '@angular/core';
//importamos el modelo
import { Post } from 'src/app/post.model';
//importamos el servidio (pora usar los métodos del CRUD)
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {  
  Posts: Post[] //inicializamos un arreglo de tipo Post (que es la clase que importamos). De esta forma se respeta el formato si o si

   constructor(private postService: PostService) {}

  //el metodo ngOnInit ejecuta todo una vez que la pagina ya está renderizada (cuando el componente ha sido inicializado) , mientas que el constructor() se ejecuta antes
  ngOnInit(): void {        
    //console.log(this.postService.getPosts()) //traemos un observable    
    

    //Subscribe() es un método que conecta el observer con eventos observable. Siempre que se realiza algún cambio en estos observables, se ejecuta un código y observa los resultados o cambios mediante el método subscribe
    this.postService.getPosts().subscribe((res) => {
      
       //prueba de como es el formato del array Posts
       /* this.Posts = [
         {id:"1", "title":"titulo de prueba", "content":"contenido de prueba", "author":"author de prueba"}
        ]  */

      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });

      //console.log(this.Posts) //finalmente tenemos el arreglo con los docs
    });    
  }
  deleteRecord = (post) => this.postService.deletePost(post);
}
