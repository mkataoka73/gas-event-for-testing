/**
 * Class Event
 * テスト用にイベントオブジェクトを提供するクラス
 * 様々なイベントに対応可能にしたい
 * @param {string} type - どのイベントのタイプか
 * @return {object} e - event
 */
class Event {
  constructor(type) {

  }
}

/**
 * Google Formからの送信をテストするイベントクラス
 */
class FormEvent extends Event {
  constructor() {
    super();
  }
}