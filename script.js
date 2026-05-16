
const btn = document.getElementById('loginBtn')
const loading = document.getElementById('loading')

btn.addEventListener('click', () => {

  btn.style.display = 'none'
  loading.classList.remove('hidden')

  const steps = [
    'Checking profile...',
    'Analyzing behavior...',
    'Detecting obsession level...',
    'Finalizing report...'
  ]

  let i = 0

  const text = loading.querySelector('p')

  const interval = setInterval(() => {

    if (i < steps.length) {
      text.innerText = steps[i]
      i++
    }

  }, 900)

  setTimeout(() => {
    clearInterval(interval)
    window.location.href = 'caught.html'
  }, 4200)

})
