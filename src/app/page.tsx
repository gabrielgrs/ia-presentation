'use client'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { slides } from '@/utils/slides'
import { styles } from '@/utils/styles'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export default function InnovativePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), [])

  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), [])

  const goToSlide = (index: number) => setCurrentSlide(index)

  const toggleFullscreen = () =>
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()

  const progress = ((currentSlide + 1) / slides.length) * 100

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextSlide()
      if (event.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      {/* Control Bar */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='sm' onClick={toggleFullscreen} className='text-white hover:bg-white/20'>
              <Maximize2 className='h-4 w-4' />
            </Button>
          </div>

          <div className='flex items-center gap-4'>
            <span className='text-sm text-white/70'>
              {currentSlide + 1} / {slides.length}
            </span>
            <div className='w-32'>
              <Progress value={progress} className='h-2' />
            </div>
          </div>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className='relative h-screen pt-20'>
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={cn(
              'absolute inset-0 transition-all duration-1000 ease-in-out',
              styles[index % styles.length].backgroundColor,
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : index < currentSlide
                  ? 'opacity-0 -translate-x-full scale-95'
                  : 'opacity-0 translate-x-full scale-95',
            )}
          >
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
              <div className='absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse' />
              <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000' />
              <div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-spin'
                style={{ animationDuration: '20s' }}
              />
            </div>

            {/* Slide Content */}
            <div className='relative z-10 h-full flex items-center justify-center'>
              <div className='text-center max-w-4xl mx-auto px-8'>
                <h1
                  className={cn(
                    'text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up',
                    styles[index % styles.length].titleColor,
                  )}
                  style={{
                    animationDelay: index === currentSlide ? '0.2s' : '0s',
                    textShadow: '0 0 30px rgba(255,255,255,0.3)',
                  }}
                >
                  {slide.title}
                </h1>
                <h2
                  className={cn(
                    'text-2xl md:text-4xl font-light mb-8 animate-fade-in-up opacity-80',
                    styles[index % styles.length].titleColor,
                  )}
                  style={{ animationDelay: index === currentSlide ? '0.4s' : '0s' }}
                >
                  {slide.subtitle}
                </h2>
                <p
                  className={cn(
                    'text-lg md:text-xl leading-relaxed animate-fade-in-up opacity-70 max-w-2xl mx-auto',
                    styles[index % styles.length].contentColor,
                  )}
                  style={{ animationDelay: index === currentSlide ? '0.6s' : '0s' }}
                >
                  {slide.content}
                </p>
              </div>
            </div>

            {/* Slide Number Indicator */}
            <div className='absolute bottom-8 right-8'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full px-4 py-2'>
                <span className='text-white font-medium'>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className='fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50'>
        <div className='flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'>
          <Button variant='ghost' size='sm' onClick={prevSlide} className='text-white hover:bg-white/20 rounded-full'>
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <div className='flex gap-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60',
                )}
              />
            ))}
          </div>

          <Button variant='ghost' size='sm' onClick={nextSlide} className='text-white hover:bg-white/20 rounded-full'>
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div className='fixed bottom-4 left-4 text-white/50 text-sm'>Use ← → keys or click controls to navigate</div>
    </div>
  )
}
