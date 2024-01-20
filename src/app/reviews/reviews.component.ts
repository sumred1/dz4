import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    {review: `Масштаб и сложность: "Война и мир" поражает своим масштабом и сложностью. Толстой описывает события на фоне войны 1812 года, представляя различные персональные истории персонажей. Разнообразие событий и персонажей создает ощущение глубины и реализма.`},
    {review: `Персонажи и их развитие: Роман представляет множество персонажей, каждый из которых претерпевает эволюцию на протяжении сюжета. Это позволяет читателю погрузиться в их жизни, переживать с ними радости и трагедии.`},
    {review: `Философские аспекты: Толстой внедряет в роман философские рассуждения и размышления о смысле жизни, истории и войны. Эти моменты предоставляют читателю глубокие мысли и вызывают обсуждение.`},
    {review: `Язык и стиль: Толстой обладает мастерством в использовании языка. Его стиль красочен и эмоционален, что делает произведение увлекательным и запоминающимся.`}
  ]
}