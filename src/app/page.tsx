import {headers} from "next/headers";
import Counter from "@/components/widgets/Counter";

export default async function Home() {
  const url = (await headers()).get('c-url')
  return (
    <div>
      <main>
        content of{' '}
        {url}

        <Counter />
      </main>
    </div>
  );
}
