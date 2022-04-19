n = 10
a = [5, 2, 3, 6, 1, 9, 7, 4, 6, 5]
k = 6
result = false #初期に設定
a.each do |num| #配列aを順に出力
  if num == k
    result += 1 #目標の値がある場合、1加算
    break
  end
end
p result