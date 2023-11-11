// 通过枚举类型，判断是localStorage，还是sessionStorage

class Cache {
  // 提前声明类型,Storage就是localStorage和sessionStorage的类型，已经在.d.ts文件声明过了
  constructor(type) {
    this.storage = type === 'localStorage' ? localStorage : sessionStorage;
  }

  setCache(key, value) {
    if (value) {
      // 防止value是对象类型，所以先转换成字符串类型，再进行setItem()；这样也不会影响其它类型
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getCache(key) {
    const value = this.storage.getItem(key);
    if (value) {
      // 里面可以有JSON格式之后的对象类型，所以要解析对象
      return JSON.parse(value);
    }
  }

  reomveCache(key) {
    this.storage.removeItem(key);
  }

  clearCache() {
    this.storage.clear();
  }
}

const localCache = new Cache('localStorage');
const sessionCache = new Cache('sessionStorage');

export { localCache, sessionCache };
