root = "src/assets/chapters/"

fulltext = read(open(root*"alltext.txt", "r"), String)

m = eachmatch(r"Chapter (\d|One|Two|Three)+\D", fulltext)

chaps = []

moff = [m.offset for m in m]
mlen = [length(m.match) for m in m]

for (mi,m) in enumerate(moff[1:end-1])
    chap = fulltext[m+mlen[mi] : moff[mi+1]-1]
    chap = strip(chap)
    chap = replace(chap, "\n" => "\r\n\r\n")
    push!(chaps, chap)
end

for (i,chap) in enumerate(chaps)
    open(root*"chap$i.txt", "w") do io
        write(io, chaps[i])
    end
end
