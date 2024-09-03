import Foundation

let fileManager = FileManager.default
let filePath = "hihi.txt"
let fileContent = "jangan diseriusin lol"
let newFilePath = "hihi.txt"
let newFileContent = "This is some new dummy content for the new file"

func readFile(_ filePath: String) {
    do {
        let content = try String(contentsOfFile: filePath, encoding: .utf8)
        print("File content:", content)
    } catch {
        print("Error reading file:", error)
    }
}

func writeFile(_ filePath: String, content: String) {
    do {
        try content.write(toFile: filePath, atomically: true, encoding: .utf8)
        print("File written successfully")
    } catch {
        print("Error writing to file:", error)
    }
}

func appendToFile(_ filePath: String, content: String) {
    if let fileHandle = FileHandle(forWritingAtPath: filePath) {
        fileHandle.seekToEndOfFile()
        fileHandle.write(content.data(using: .utf8)!)
        print("Content appended successfully")
    } else {
        print("Error appending to file")
    }
}

func deleteFile(_ filePath: String) {
    do {
        try fileManager.removeItem(atPath: filePath)
        print("File deleted successfully")
    } catch {
        print("Error deleting file:", error)
    }
}

func simulateDelay(_ ms: Int) {
    Thread.sleep(forTimeInterval: TimeInterval(ms) / 1000)
}

func simulateNetworkRequest(_ url: String) {
    print("Fetching data from \(url)...")
    simulateDelay(1000)
    print("Data fetched successfully from \(url)")
}

func performFileOperations() {
    print("Starting file operations...")
    writeFile(filePath, content: fileContent)
    readFile(filePath)
    appendToFile(filePath, content: "\nAppended content.")
    readFile(filePath)
    deleteFile(filePath)
    print("File operations completed.")
}

func simulateTasks() {
    simulateNetworkRequest("https://www.google.com")
    simulateNetworkRequest("https://www.wikipedia.org")
    performFileOperations()
    writeFile(newFilePath, content: newFileContent)
    readFile(newFilePath)
    simulateNetworkRequest("https://www.github.com")
}

func batchProcessTasks() {
    let urls = [
        "https://www.google.com/search?q=javascript",
        "https://www.wikipedia.org/wiki/Node.js",
        "https://www.github.com/explore",
        "https://api.github.com/users",
        "https://api.github.com/repos",
        "https://jsonplaceholder.typicode.com/posts"
    ]
    
    for url in urls {
        simulateNetworkRequest(url)
    }
    print("kenapa kamu masih jomblo?")
}

func extraFileOperations() {
    for i in 0..<5 {
        let fileName = "extra-file-\(i).txt"
        let content = "Content for file \(i)"
        writeFile(fileName, content: content)
        readFile(fileName)
        appendToFile(fileName, content: "\nMore content for file \(i)")
        deleteFile(fileName)
    }
}

func simulateUserInput() {
    print("Simulating user input...")
    simulateDelay(500)
    print("User typed: Halo matt, kalau dirimu sudah tidak bisa bertahan lalu kenapa masih hidup?")
    simulateDelay(500)
    print("User typed: mending bunuh diri gak sih?")
}

func main() {
    print("Starting I/O task...")
    simulateTasks()
    batchProcessTasks()
    extraFileOperations()
    simulateUserInput()
    print("bravo joint 7, mission completed")
}

main()