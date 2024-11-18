import Link from "next/link";

export default function HaberlerLayout({ children }) {
  return (
    <div className='haberlerLayout'>
      <div className='leftbar'>
         <Link href='/haberler/son-haberler'>Son Haberler</Link>
         <Link href='/haberler/güncel-haberler'>Güncel Haberler</Link>
         <Link href='/haberler/yeni-haberler'>Yeni Haberler</Link>
      </div>
      <div className='right'>
        {children}
        </div>
    </div>
  );
}
