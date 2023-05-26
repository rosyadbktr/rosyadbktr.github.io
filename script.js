const link = document.querySelector('.link');
const shareLink = document.querySelector('.share-link')
link.addEventListener('mouseover', () => shareLink.classList.remove('hidden'))
link.addEventListener('mouseleave', () => shareLink.classList.add('hidden'))