import Link from "next/link";

export default function PostPreview() {
  return (
    <Link href="blog/how-to-center-a-div">
      <article className="hover:bg-zinc-800 relative text-zinc-50 rounded-xl p-3 w-full transition-colors before:block before:absolute before:left-[-14px] md:before:left-[-42px] before:rounded-bl-2xl before:top-1/2 before:-translate-y-1/2 before:border-b-2 before:border-l-2 before:border-zinc-700 before:h-3 before:w-5 md:before:h-10 md:before:w-10">
        <time
          dateTime="04-06-2023Z00:00:00"
          className="md:text-xs text-sm text-zinc-600"
        >
          March 06, 2023
        </time>
        <h3 className="md:text-lg text-xl text-orange-600 font-semibold text-ellipsis line-clamp-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed iusto
          amet nostrum excepturi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Optio est nihil id maiores neque aliquam facilis
          dolor quia tempora, ad earum excepturi similique! Quidem ab, saepe
          corporis necessitatibus quas dolor!
        </h3>
        <p className="text-zinc-200 md:text-sm text-base text-ellipsis line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
          minus amet illo perferendis, eligendi maxime adipisci ipsum labore
          facilis ducimus, tempore eius quos dolore fuga. Saepe optio labore
          nesciunt quod quae, dolorem sequi maiores quaerat deleniti delectus
          earum repellendus, dolorum quos dolore? {"\n"}Impedit incidunt qui,
          necessitatibus itaque, quasi saepe earum tempora laboriosam
          repellendus, neque reprehenderit. Autem blanditiis ex, odit soluta
          consectetur architecto, perspiciatis esse optio magnam repellat a in
          nisi excepturi id et aperiam itaque repudiandae. Dolor, laborum error
          expedita aspernatur commodi minus perspiciatis animi accusamus sed
          tempore? Iste ut fugiat nobis possimus cum saepe repellat nihil
          impedit magni.
        </p>
      </article>
    </Link>
  );
}
