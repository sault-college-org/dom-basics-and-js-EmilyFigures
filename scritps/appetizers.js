const Appetizers = () => {
  const appetizersContent = document.createElement('div');
  appetizersContent.setAttribute('class', 'container');

  const appetizersHeader = document.createElement('h1');
  appetizersHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizersHeader.innerHTML = 'APPETIZERS';

  const appetizersList = document.createElement('ul');
  appetizersList.setAttribute('class', 'appetizersList');

  const appetizersItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const appetizers1 = document.createElement('h1');
    appetizers1.setAttribute('id', 'appetizers1');
    appetizers1.setAttribute('class', 'text-center');
    appetizers1.innerHTML = 'SALADS';
    list.appendChild(appetizers1);
    const appetizersParagraph1 = document.createElement('p');
    appetizersParagraph1.setAttribute('class', 'my-3 pb-3');
    appetizersParagraph1.innerHTML = 'Enjoy a fresh salad using our signature House salad dressing!';
    list.appendChild(appetizersParagraph1);

    const appetizers2 = document.createElement('h1');
    appetizers2.setAttribute('id', 'appetizers2');
    appetizers2.setAttribute('class', 'text-center');
    appetizers2.innerHTML = 'FINGER FOOD';
    list.appendChild(appetizers2);
    const appetizersParagraph2 = document.createElement('p');
    appetizersParagraph2.setAttribute('class', 'my-3 pb-3');
    appetizersParagraph2.innerHTML = 'Choices of our signature Game Day finger foods. Including: chicken wings, mozzarella sticks, nachos and more!';
    list.appendChild(appetizersParagraph2);

    const appetizers3 = document.createElement('h1');
    appetizers3.setAttribute('id', 'appetizers3');
    appetizers3.setAttribute('class', 'text-center');
    appetizers3.innerHTML = 'SOUP';
    list.appendChild(appetizers3);
    const appetizersParagraph3 = document.createElement('p');
    appetizersParagraph3.setAttribute('class', 'my-3 pb-3');
    appetizersParagraph3.innerHTML = 'Your Choice of Soup perfect for a cold day. Soups flavours include: chicken noodle, tomato, itallian wedding and potato bacon.';
    list.appendChild(appetizersParagraph3);

    return list;
  };

  appetizersContent.appendChild(appetizersHeader);
  appetizersContent.appendChild(appetizersList);
  appetizersContent.appendChild(appetizersItems());

    return appetizersContent;
  };
  
  export default Appetizers;