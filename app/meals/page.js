import Link from "next/link";

export default function Meals(){
    return (
        <>
        <h2>MY today meal</h2>
        <Link href='/meals/review'>review</Link>
        </>
    )
}