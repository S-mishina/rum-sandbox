// Node.js OpenTelemetry SDKのサンプルコード
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// トレースプロバイダをセットアップ
const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'my-service',
  }),
});

// OTLPエクスポーターを設定（gRPC/HTTPのエンドポイントを選択）
const exporter = new OTLPTraceExporter({
  url: "localhost:1111",
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();

// サンプルのトレースを送信
const tracer = provider.getTracer('example-tracer');
const span = tracer.startSpan('example-operation');
setTimeout(() => {
  span.end();
  console.log(span.end());
  console.log('トレースデータが送信されました');
}, 1000);
