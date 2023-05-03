const timer = setInterval(() => {
    const remain = parseInt((new Date('2022-11-11 18:00:00') - new Date()) / 1000);
    if (remain > 0) {
      const remainHours = parseInt(remain / 60 / 60);
      const remainMinutes = parseInt((remain % (60 * 60)) / 60);
      const remainSecond = parseInt((remain % (60 * 60)) % 60);
      console.clear();
      console.log('距离还剩：');
      console.log(`${remainHours}小时${remainMinutes}分钟${remainSecond}秒`);
    } else {
      clearInterval(timer);
    }
  }, 1000);