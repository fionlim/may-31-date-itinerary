const itinerary = [
  {
    id: 'brunch',
    time: '12:30 PM',
    title: 'Brunch',
    description: 'Yummy brunch spot to fuel d day!🥞',
    type: 'food',
  },
  {
    id: 'activity1',
    time: '1:30 PM',
    title: 'Lazy Days with Dog and Frog Exhibition',
    description: 'Exhibition about dog, frog, productivity & chlling.🐶🐸',
    image: 'images/lazy-days-dog-and-frog.jpg',
    link: 'https://maps.app.goo.gl/F8SwYCnS8khgMkF88',
  },
  {
    id: 'snack',
    time: '2:30 PM',
    title: 'Snack / Coffee',
    description: 'Coffee recharge neh ☕️',
    type: 'food',
  },
  {
    id: 'lego',
    time: '3:30 PM',
    title: 'Lego Exhibition at Jewel',
    description: 'Visit the Lego exhibition. Buy tickets for Canopy Park to explore the whole area. PS: no bringing of legos home!',
    images: ['images/lego-exhibit-1.jpg', 'images/lego-exhibit-2.jpg'],
  },
  {
    id: 'dinner',
    time: '6:30 PM',
    title: 'Dinner',
    description: 'Time to makan!🍽',
    type: 'food',
  },
];

const foodOptions = {
  brunch: [
    {
      id: 'pelle-and-pepe',
      name: 'Pelle and Pepe',
      description: 'Plant-based bakes with wholegrain ingredients.',
      image: 'images/pelle-and-pepe.jpg',
      link: 'https://maps.app.goo.gl/5Xy7sLcSjzXhzmp46?g_st=ic',
    },
    {
      id: 'marlows-deli',
      name: "Marlow's Deli",
      description: 'Foccacia sandwiches, formally known as Wooly Bagels',
      image: 'images/marlows-deli.jpg',
      link: 'https://maps.app.goo.gl/oeDCu3EASyhtA2fA6?g_st=ic',
    },
  ],
  snack: [
    {
      id: 'bee-hoe-coffee',
      name: 'Bee Hoe Coffee',
      description: 'Don\'t be a hoe coffee',
      image: 'images/bee-hoe-coffee.jpg',
      link: 'https://maps.app.goo.gl/dmEcHhsvRuTJNtxSA?g_st=ic',
    },
    {
      id: 'cata-coffee',
      name: 'Cata Coffee',
      description: 'Atas coffee, apparently standing tables only.',
      image: 'images/cata-coffee.jpg',
      link: 'https://maps.app.goo.gl/7GmPvPsMoc48pwZ4A?g_st=ic',
    },
  ],
  dinner: [
    {
      id: 'tempura-en',
      name: 'Tempura-en (Japanese)',
      description: 'Made to order handcrafted tempura.🍤',
      image: 'images/tempura-en.jpg',
      link: 'https://maps.app.goo.gl/H3uDCsEFjXnGBsrx8',
    },
    {
      id: 'tutto',
      name: 'Tutto (Italian)',
      description: 'Handmade pasta, slow-fermented Neapolitan pizza and artisanal gelato.',
      image: 'images/tutto.jpg',
      link: 'https://maps.app.goo.gl/uKmLgFm84izyz2Dc9',
    },
    {
      id: 'baba-nyonya',
      name: 'Baba Nyonya Restaurant (Peranakan)',
      description: 'Opportunity for 715 to get closer to his baba roots.',
      image: 'images/baba-nyonya.jpg',
      link: 'https://maps.app.goo.gl/AwTT76ZD23BFVJSW9',
    },
  ],
};

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  itinerary.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'timeline-item';

    const when = document.createElement('div');
    when.className = 'timestamp';
    when.textContent = item.time;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const details = document.createElement('div');
    details.className = 'timeline-item-details';

    const description = document.createElement('p');
    description.textContent = item.description;
    details.appendChild(description);

    if (item.type === 'food') {
      const selected = getFoodOption(item.id, item.selectedOption);
      if (selected) {
        const selectedHeading = document.createElement('p');
        selectedHeading.innerHTML = `<strong>Selected spot:</strong> ${selected.name}`;
        details.appendChild(selectedHeading);

        const image = document.createElement('img');
        image.src = selected.image;
        image.alt = selected.name;
        image.onerror = () => {
          image.alt = `${selected.name} photo not found. Add ${selected.image} to the project.`;
          image.style.background = '#f3f1ee';
          image.style.minHeight = '180px';
        };
        details.appendChild(image);

        const link = document.createElement('a');
        link.href = selected.link;
        link.target = '_blank';
        link.rel = 'noreferrer noopener';
        link.textContent = 'View on map';
        link.className = 'selected-map-link';
        details.appendChild(link);
      } else {
        const warning = document.createElement('p');
        warning.className = 'timeline-item-warning';
        const warningMessages = {
          brunch: 'are you on a diet?? select brunch spot now!',
          snack: 'i am sleepy, give me coffee!!',
          dinner: 'WINNER WINNER CHICKEN DINNER! CHOOSE DINNER NOW!',
        };
        warning.textContent = warningMessages[item.id] || `are you on a diet?? select ${item.title.toLowerCase()} option!`;
        details.appendChild(warning);
      }

      const options = document.createElement('div');
      options.className = 'timeline-item-options';

      const optionsLabel = document.createElement('div');
      optionsLabel.className = 'timeline-item-options-label';
      optionsLabel.textContent = `Choose ${item.title.toLowerCase()}`;
      options.appendChild(optionsLabel);

      const optionList = document.createElement('div');
      optionList.className = 'option-list timeline-option-list';
      foodOptions[item.id].forEach((option) => {
        optionList.appendChild(createOptionCard(option, item.id));
      });
      options.appendChild(optionList);

      const itemContent = document.createElement('div');
      itemContent.className = 'timeline-item-inner';
      itemContent.append(details, options);

      card.append(when, title, itemContent);
    } else {
      if (Array.isArray(item.images) && item.images.length) {
        item.images.forEach((imageSrc, index) => {
          const activityImage = document.createElement('img');
          activityImage.src = imageSrc;
          activityImage.alt = `${item.title} ${index + 1}`;
          activityImage.onerror = () => {
            activityImage.alt = `${item.title} photo not found. Add ${imageSrc} to the project.`;
            activityImage.style.background = '#f3f1ee';
            activityImage.style.minHeight = '180px';
          };
          details.appendChild(activityImage);
        });
      } else if (item.image) {
        const activityImage = document.createElement('img');
        activityImage.src = item.image;
        activityImage.alt = item.title;
        activityImage.onerror = () => {
          activityImage.alt = `${item.title} photo not found. Add ${item.image} to the project.`;
          activityImage.style.background = '#f3f1ee';
          activityImage.style.minHeight = '180px';
        };
        details.appendChild(activityImage);
      }
      if (item.link) {
        const mapLink = document.createElement('a');
        mapLink.href = item.link;
        mapLink.target = '_blank';
        mapLink.rel = 'noreferrer noopener';
        mapLink.textContent = 'View on map';
        mapLink.className = 'selected-map-link';
        details.appendChild(mapLink);
      }
      card.append(when, title, details);
    }

    timeline.appendChild(card);
  });
}

function getFoodOption(section, optionId) {
  const list = foodOptions[section];
  return list ? list.find((option) => option.id === optionId) : null;
}

function createOptionCard(option, section) {
  const card = document.createElement('div');
  card.className = 'option-card';

  const content = document.createElement('div');
  content.className = 'option-card-content';

  const heading = document.createElement('h4');
  heading.textContent = option.name;

  const description = document.createElement('p');
  description.textContent = option.description;

  const button = document.createElement('button');
  const isSelected = getSelectedOption(section) === option.id;
  button.textContent = isSelected ? 'Selected' : 'Choose';
  if (isSelected) {
    button.classList.add('selected');
    card.classList.add('selected');
  }
  button.addEventListener('click', () => {
    triggerConfettiBurst(card);
    updateSelectedOption(section, option.id);
  });

  content.append(heading, description, button);
  card.append(content);

  return card;
}

function getSelectedOption(section) {
  const item = itinerary.find((entry) => entry.id === section);
  return item?.selectedOption;
}

function updateSelectedOption(section, optionId) {
  const item = itinerary.find((entry) => entry.id === section);
  if (item) {
    item.selectedOption = optionId;
    renderTimeline();
  }
}

function triggerConfettiBurst(sourceElement) {
  const rect = sourceElement.getBoundingClientRect();
  const container = document.createElement('div');
  container.className = 'confetti-container';
  container.style.left = `${rect.left + rect.width / 2}px`;
  container.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(container);

  const colors = ['#ff6584', '#ffd166', '#06d6a0', '#118ab2', '#8338ec'];
  const pieces = 18;

  for (let i = 0; i < pieces; i += 1) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${6 + Math.random() * 6}px`;
    confetti.style.height = `${3 + Math.random() * 3}px`;
    confetti.style.setProperty('--dx', `${Math.round((Math.random() * 2 - 1) * (80 + Math.random() * 80))}px`);
    confetti.style.setProperty('--dy', `${Math.round(-Math.random() * (90 + Math.random() * 50))}px`);
    confetti.style.setProperty('--rotation', `${Math.round((Math.random() * 360) - 180)}deg`);
    confetti.style.setProperty('--duration', `${0.9 + Math.random() * 0.35}s`);
    confetti.style.setProperty('--delay', `${Math.random() * 0.12}s`);
    container.appendChild(confetti);
  }

  window.requestAnimationFrame(() => {
    container.classList.add('active');
  });

  setTimeout(() => {
    container.remove();
  }, 1500);
}

function initSecretMessage() {
  const passcodeInput = document.getElementById('secret-passcode');
  const unlockButton = document.getElementById('secret-unlock-button');
  const secretMessage = document.getElementById('secret-message');
  const secretError = document.getElementById('secret-error');
  const passcode = '0101';

  function unlockSecret() {
    const isCorrect = passcodeInput.value === passcode;
    if (isCorrect) {
      secretMessage.classList.remove('hidden');
      secretError.textContent = '';
      passcodeInput.value = '';
      // visual: show unlocked state
      unlockButton.classList.remove('shake');
      unlockButton.classList.add('unlocked');
      unlockButton.setAttribute('aria-pressed', 'true');
      const icon = unlockButton.querySelector('.lock-icon');
      if (icon) icon.textContent = '🔓';
      triggerFireworkEffect(unlockButton);
    } else {
      secretError.textContent = 'Incorrect code. Try again.';
      secretMessage.classList.add('hidden');
      // visual: shake
      unlockButton.classList.remove('unlocked');
      unlockButton.classList.remove('shake');
      // force reflow then add shake
      void unlockButton.offsetWidth;
      unlockButton.classList.add('shake');
      unlockButton.setAttribute('aria-pressed', 'false');
      const icon = unlockButton.querySelector('.lock-icon');
      if (icon) icon.textContent = '🔒';
    }
  }

  unlockButton.addEventListener('click', unlockSecret);
  passcodeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      unlockSecret();
    }
  });
}

function triggerFireworkEffect() {
  const container = document.createElement('div');
  container.className = 'firework-container';
  document.body.appendChild(container);

  const colors = ['#ffe066', '#f25f5c', '#70c1b3', '#247ba0', '#b5838d'];
  const pieces = 24;

  for (let i = 0; i < pieces; i += 1) {
    const spark = document.createElement('div');
    spark.className = 'firework-spark';
    spark.style.color = colors[i % colors.length];
    spark.style.setProperty('--angle', `${Math.random() * 360}deg`);
    spark.style.setProperty('--delay', `${(Math.random() * 0.18).toFixed(2)}s`);
    spark.style.setProperty('--distance', `${160 + Math.random() * 120}px`);
    spark.style.setProperty('--scale', `${0.35 + Math.random() * 0.9}`);
    spark.style.left = `${10 + Math.random() * 80}%`;
    spark.style.top = `${10 + Math.random() * 80}%`;
    container.appendChild(spark);
  }

  window.requestAnimationFrame(() => {
    container.classList.add('active');
  });

  setTimeout(() => {
    container.remove();
  }, 1800);
}

window.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  initSecretMessage();
});
