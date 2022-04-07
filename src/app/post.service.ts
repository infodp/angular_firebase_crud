import { Injectable } from '@angular/core';

//importamos modulos para trabajar con DB Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importamos nuestro modelo de datos
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  //Para utilizar el servicio, usamos una variable privada (private) para tener una propiedad privada, 
  //es decir que sea accesible SOLO en este componente
  constructor( private angularFirestore: AngularFirestore ) { }

  //creamos los métodos para el CRUD

  //traemos TODOS los posts
  getPosts() {
    return this.angularFirestore
            .collection("posts")
            .snapshotChanges()
  }

  //traemos un SOLO post
  getPostById(id) {
    return this.angularFirestore
            .collection("posts")
            .doc(id)
            .valueChanges()
  }
    
  //crear un post
  createPost(post: Post) {
    return new Promise<any> ( (resolve, reject) => {
          this.angularFirestore
              .collection("posts")
              .add(post)
              .then( (response) => {
                 console.log(response) 
              },
              (error) => {
                reject(error)
              })
    })
  }


  //actualizar un post
  updatePost(post: Post, id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({
        title: post.title,
        content: post.content,
        author: post.author
      });
  }

  //eliminar un post
  deletePost(post) {
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete();
  }

}
