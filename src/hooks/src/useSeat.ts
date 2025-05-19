export function useSeat(cardname:string) {
  const imgsMap: Record<string, { default: string }> = import.meta.glob('@assets/usedimg/seat/*.png', { 
    eager: true 
  })
  const _path = '/src/assets/usedimg/seat/'
  return imgsMap[_path + cardname + '.png']['default']
}