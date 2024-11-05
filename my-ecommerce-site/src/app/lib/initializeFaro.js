import { initializeFaro, getWebInstrumentations } from '@grafana/faro-web-sdk';

let faro;

export function initFaro() {
  if (typeof window !== 'undefined') {
    faro = initializeFaro({
      url: 'http://127.0.0.1:12346/collect',
      app: {
        name: 'frontend-app',
        version: '1.0.0',
      },
      logging: {
        level: 'debug',
      },
      customAttributes: {  // ラベルとして扱うカスタム属性
        app: 'frontend-app',
        environment: 'production',
      },
      // インストゥルメンテーションの追加
      instrumentations: [
        ...getWebInstrumentations() // 自動トレースとエラーログ送信を追加
      ],
    });
  }
  return faro;
}

export async function getFaroInstance() {
  if (!faro) {
    faro = await initFaro(); // Faroが未初期化なら初期化
  }
  return faro;
}
