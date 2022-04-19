n = 10 #データ数
a = [6, 2, 3, 3, 1, 9, 7, 4, 8, 5] #配列（対象）
k = 6 #当たり
result = false
a.each do |num|
  if num == k #配列aに、k(この場合6)があれば trueを返す
    result = true
    break
  end
end
p result