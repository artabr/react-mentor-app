import imgUrl from '../../assets/images/posters.jpg';

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className="bg-zinc-500 bg-cover bg-blend-multiply" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="backdrop-blur-sm">
        <div className="p-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-between lg:px-8 lg:pb-16">
          {children}
        </div>
      </div>
    </div>
  );
}
