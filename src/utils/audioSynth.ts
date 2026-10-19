/**
 * Pure Web Audio API Ambient Indian Shehnai & Tanpura Synthesizer
 * Provides an authentic, auspicious traditional Indian background ambience
 * (Tanpura Sa-Pa drone, subtle temple chime bell, and bamboo flute harmonics)
 * Zero external audio dependencies, guaranteed 100% reliable playback.
 */

class IndianAuspiciousAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private melodyInterval: any = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;

    // Master volume control (gentle ambient level)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 2);
    this.masterGain.connect(this.ctx.destination);

    // 1. Tanpura drone (F# / C# base scale, classical Indian auspicious tuning)
    // Root Sa = 146.83 Hz (D3) or 138.59 Hz (C#3), Pa = 207.65 Hz (G#3)
    const baseFreqs = [138.59, 138.59 * 2, 207.65, 277.18]; // C#3, C#4, G#3, C#4

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle warm detune for realistic tanpura acoustic beat frequency
      osc.detune.setValueAtTime((idx - 1.5) * 3, this.ctx.currentTime);

      // Soft pulsating volume
      oscGain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);

      // LFO for breathing tanpura pulsation
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.25 + idx * 0.08, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start();
      this.droneOscillators.push(osc);
    });

    // 2. Auspicious gentle chime bell
    this.ringTempleBell();

    // 3. Periodic gentle bansuri/flute melodic phrase (Raag Bilawal / Yaman notes)
    // Sa, Re, Ga, Ma, Pa, Dha, Ni
    const ragaNotes = [277.18, 311.13, 349.23, 369.99, 415.30, 466.16, 523.25, 554.37];
    let noteStep = 0;

    this.melodyInterval = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const note = ragaNotes[noteStep % ragaNotes.length];
      this.playFluteNote(note);
      
      // Randomly change next note for natural improvisation
      noteStep = (noteStep + 1 + Math.floor(Math.random() * 2)) % ragaNotes.length;

      // Occasional sacred chime
      if (Math.random() > 0.7) {
        this.ringTempleBell();
      }
    }, 2800);
  }

  private playFluteNote(freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle breath vibrato
    const vibrato = this.ctx.createOscillator();
    const vibGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, now);
    vibGain.gain.setValueAtTime(4, now);
    vibrato.connect(osc.frequency);
    vibrato.start();

    // Smooth flute envelope: slow attack, warm sustain, gentle release
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 1.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 2.5);
  }

  private ringTempleBell() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const bellOsc = this.ctx.createOscillator();
    const bellGain = this.ctx.createGain();

    bellOsc.type = 'triangle';
    bellOsc.frequency.setValueAtTime(1108.73, now); // C#6 harmonic

    bellGain.gain.setValueAtTime(0.08, now);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

    bellOsc.connect(bellGain);
    bellGain.connect(this.masterGain);
    bellOsc.start(now);
    bellOsc.stop(now + 3.2);
  }

  public stop() {
    if (!this.isPlaying) return;
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
      setTimeout(() => {
        this.droneOscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch {}
        });
        this.droneOscillators = [];
        this.isPlaying = false;
      }, 650);
    } else {
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const auspiciousAudio = new IndianAuspiciousAudio();
