import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => router.push('/home')}>
        下载
      </button>
    </div>
  );
}