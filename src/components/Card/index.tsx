import React from 'react';

interface Props {
    id: string,
    thumbnail: string | null,
    title: string,
    textContent: string,
}
const Card = React.memo((props: Props) => {
  const { id, thumbnail, title, textContent } = props;

  return (
    <div className="snap-start grow-0 shrink-0 min-w-0 flex" key={id}>
      <div className="border border-card ml-2 flex flex-col text-content-subdued max-w-[400px] min-w-[400px] justify-between bg-surface shadow-card sm:rounded-card cursor-pointer hover:shadow-card-hovered transition-all ease-in-out duration-200 stretch sm:rounded-lg h-full">
        <div className="overflow-hidden -mx-[1px] empty:hidden sm:rounded-t-card -mt-[1px]">
          <div className="w-full relative aspect-video">
            <div className="w-full h-full bg-cover bg-center absolute top-0 start-0" style={{ backgroundImage: `url(${ thumbnail || '	https://tribe-s3-production.imgix.net/v1vqfy7Y7eCNDk5erXo4D?fit=max&w=1000&auto=compress,format' })`}} />
          </div>
        </div>
        <div className="flex-1 px-4 py-5 sm:p-6 flex flex-col gap-4">
          <div className="grow-0 shrink-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-content text-sm mt-0 min-w-0 break-words empty:hidden basis-full">
                <div className="flex items-center">
                  <div className="badge inline-block min-w-0 font-normal rounded-base focus:outline-none focus-visible:ring bg-surface-neutral text-content-subdued px-2.5 py-1 min-h-[28px] text-label-sm gap-1 truncate  max-w-full">
                    {title}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4">
              <div className="empty:hidden min-w-0 basis-full">
                <article className="prose break-words line-clamp-5 text-left">
                  {textContent}
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
export default Card;