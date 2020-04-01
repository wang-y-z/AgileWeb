describe('add todo', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://127.0.0.1:7001/');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title', async function() {
        expect(await page.title()).to.eql('Koa • Todo');
    })
    it('should new todo correct', async function() {
      await page.click('#new-todo', {delay: 500});
      await page.type('#new-todo', 'new todo item', {delay: 50});
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('new todo item');
    }) 
    it('should new and delete correct', async function() {
      await page.click('#new-todo', {delay: 500});
      await page.type('#new-todo', '1 todo item', {delay: 100});
      await page.keyboard.press("Enter");
      await page.evaluate(()=> {
        document.querySelector('#todo-list > li:nth-child(1) > div > button').click()
      }), {delay: 5000};
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('1 todo item');
    }) 
    it('should new and finish correct', async function() {
      await page.evaluate(()=> {
        document.querySelector('#todo-list > li > div > input').click()
      }), {delay: 5000};
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.$$('#todo-list > li.completed');
      console.log(expectInputContent)
      expect(expectInputContent).to.eql('1 todo item');
    }) 
    

  });