import { AfterContentInit, AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, AfterContentInit, OnChanges{

  @Input() questionId: string
  @Input() source: string
  @Input() isPractice: Boolean = false

  allowReplayNumber: number = 99
  playNumber: number = 0
  constructor() {
  }


  ngOnInit(): void {
    if (!this.isPractice) {
      this.allowReplayNumber = 1
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    const $ = document.querySelector.bind(document);
    const __this = this
    const totalTime = $('.total-time')
    const currentTime = $('.current-time')
    const audio = $("audio")
    const progress = $('.progress-bar')
    const main = {
      isPlaying: false,
      render: function () {
        audio.currentTime = 0
        audio.src = __this.source
        audio.load()
        currentTime.innerText = '0:00'
        progress.value = 0
      },
      handleEvents: function () {
        const _this = this
        const audioBtn = $(".audio-btn")
        const player = $(".audio-player")

        //Handle Play/Pause click event
        audioBtn.onclick = (function () {
          if(!_this.isPlaying){
            audio.play()
            _this.isPlaying = true
            player.classList.add('playing')
          }else{
            audio.pause()
            _this.isPlaying = false
            player.classList.remove('playing')
          }
        })

        audio.onloadeddata = function(){
          totalTime.innerText = convertDurationToTime(audio.duration)
          updatePlayer()
        }
        const updatePlayer = audio.ontimeupdate = function () {
          currentTime.innerText = convertDurationToTime(audio.currentTime)
          if (audio.currentTime >= audio.duration) {
            __this.playNumber++
            if (__this.playNumber >= 0) {
              $(".audio-btn").disabled = true
              progress.value = 0
              player.classList.remove('playing')
              player.classList.add('disabled')
            }
          }else{
            progress.value = audio.currentTime/audio.duration * 100
          }
        }
      },
      start: function(){
        this.render()
        this.handleEvents()
      }
    }

    function convertDurationToTime(duration:number) {
      return `${Math.floor(duration / 60)}:${('0' + Math.floor(duration % 60)).slice(-2)}`
    }

    main.start()
  }

  ngAfterContentInit(): void {

  }


}
